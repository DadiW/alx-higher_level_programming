#!/bin/bash
# task 0 takes in a URL, sends a request to that URL, and displays the size of the body of the response
sudo curl -i -s $1 | grep "Content-Length" | cut -d ' ' -f2
