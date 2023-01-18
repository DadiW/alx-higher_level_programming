#!/usr/bin/python3
from sys import argv
if len(argv) == 1:
    print("0 agruments.")
elif len(argv) == 2:
    print("1 agrument:")
    print("{}: {}".format(1, argv[1]))
else:
    print("{} agruments:".format(len(argv) - 1))
    for i in range(1, len(argv)):
        print("{}: {}".format(i, argv[i]))
