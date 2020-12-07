cmake_minimum_required(VERSION 3.16.3)
project(__dnd_world__)

# conan.io package manager setup
if (EXISTS ${CMAKE_BINARY_DIR}/conanbuildinfo.cmake)
    include(${CMAKE_BINARY_DIR}/conanbuildinfo.cmake)
    conan_basic_setup()
else ()
    message(WARNING "The file conanbuildinfo.cmake doesn't exist, you have to run conan install first")
endif ()

# libraries
include_directories(${Boost_INCLUDE_DIR})

add_subdirectory(src)
add_subdirectory(third_party)
