from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from fastapi import Depends, FastAPI, HTTPException, status, Response
from typing import Optional
from pydantic import BaseModel
from enum import Enum, IntEnum

app = FastAPI()


class RatingEnum(IntEnum):
    crap = 1
    bad = 2
    neutral = 3
    satisfied = 4
    excellent = 5


class CategoryEnum(str, Enum):
    drama = "drama"
    history = "history"
    romance = "romance"
    lifestyle = "lifestyle"
    business = "business"
    gardening = "gardening"


class Book(BaseModel):
    title: str
    author: str
    description: str
    price: float(12, 2)
    image_url: str
    rating: RatingEnum
    category: CategoryEnum
    pages: int


@app.get("/")
def get():
    return JSONResponse(content="Hello world!")


@app.get("/books/{book_id}")
async def read_book(book_id: int, q: Optional[str] = None):
    return {"book_id": book_id}


app.put("/books/{book_id}")


async def update_book(book_id: int, book: Book):
    return {"book_title": book.title, "book_id": book.id}
