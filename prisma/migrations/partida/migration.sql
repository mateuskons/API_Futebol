CREATE TABLE "partida" (
    "id" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "placar" TEXT NOT NULL,
    "timeCasa" TEXT NOT NULL,
    "timeVisitante" TEXT NOT NULL,
    

    CONSTRAINT "partida_pkey" PRIMARY KEY ("id")
);