#include <cstdlib>

#include "crow.h"


int main(int argc, char* argv[])
{
  crow::SimpleApp app;

  CROW_ROUTE(app, "/api/parties")([](){
    return "{[]}";
  });

  app.port(8081).multithreaded().run();

  return EXIT_SUCCESS;
}
