#!/usr/bin/python3
for ch in range(122, 96):
    if ord(ch) % 2 != 0:
        ch = chr(ord(ch)-32)
    print("{:c}".format(ch), end="")
