import asyncio
import os
import csv
from datetime import datetime, timezone
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, ContextTypes, filters
from dotenv import load_dotenv

load_dotenv()

TOKEN = os.getenv("TOKEN")
BOT_USERNAME = os.getenv("BOT_USERNAME")

_write_lock = asyncio.Lock()
USERS_FILE = "users.csv"

async def save_user(update: Update) -> None:
    """Сохраняет tgId и userName в CSV при любом сообщении."""
    user = update.effective_user
    if not user:
        return

    row = {
        "tg_id": user.id,
        "username": user.username or "",
        "timestamp_utc": datetime.now(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z"),
    }

    async with _write_lock:
        need_header = not os.path.exists(USERS_FILE) or os.path.getsize(USERS_FILE) == 0
        with open(USERS_FILE, "a", encoding="utf-8", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=["tg_id", "username", "timestamp_utc"])
            if need_header:
                writer.writeheader()
            writer.writerow(row)

async def on_start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await save_user(update)
    await update.message.reply_text(
        "Хеллоу\n"
        "Добавили тебя в список ожидания, скоро стартуем🫡"
    )

async def on_anything_else(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await save_user(update)
    await update.message.reply_text("*что-то на непонятном*\np.s. понимаю только /start и записываю в список ожидания")

def main() -> None:
    app = Application.builder().token(TOKEN).build()

    app.add_handler(CommandHandler("start", on_start))

    app.add_handler(MessageHandler(filters.ALL, on_anything_else))

    app.run_polling(close_loop=False)

if __name__ == "__main__":
    main()