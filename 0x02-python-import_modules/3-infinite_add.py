#!/usr/bin/python3
if __name__ == "__main__":
    from sys import argv
    i = len(argv)
    add = 0
    for j in range(1, i):
        add += int(argv[j])
    print("{:d}".format(add))
