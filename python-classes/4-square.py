#!/usr/bin/python3

"""Square Class.
This module contains a class that defines a square.
Usage Example:
    Square = __import__('4-square').Square
    my_square = Square(3)
    print(type(my_square))
    print(my_square.__dict__)
"""


class Square:
    """Defines a square with size and area calculation."""

    def __init__(self, size=0):
        self.size = size  # invokes the setter for validation

    @property
    def size(self):
        """Retrieve the size of the square."""
        return self.__size

    @size.setter
    def size(self, value):
        """Set the size of the square with validation."""
        if not isinstance(value, int):
            raise TypeError("size must be an integer")
        if value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    def area(self):
        """Calculate and return the area of the square."""
        return self.__size ** 2
