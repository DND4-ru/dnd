# Getting Started with world service

Service to provide core environment of the project: parties, characters and so on.\
Project is based on the []().

## Requirements

If you want to build this application on the host, then [npm](https://www.npmjs.com) should be installed.\
For this purpose you can use [miniconda](https://docs.conda.io/en/latest/miniconda.html).

## Building process

It's expected that you already have compiler and `conan` installed.

```shell script
mkdir build && cd build
conan install .. -s cppstd=gnu17 --build=missing
cmake ..
make
```
