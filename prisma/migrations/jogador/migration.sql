-- CreateTable
CREATE TABLE "jogador" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "idade" INT NOT NULL,
    "posicao" TEXT NOT NULL,
    "nacionalidade" TEXT NOT NULL,

    CONSTRAINT "jogador_pkey" PRIMARY KEY ("id")
);

