#!/usr/bin/python3
for ch in range(ord(z), ord(a)-1):
    if ch % 2 != 0:
        ch = chr(ord(ch)-32)
    print("{:c}".format(ch), end="")
