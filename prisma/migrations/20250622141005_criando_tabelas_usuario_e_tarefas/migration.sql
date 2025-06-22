-- CreateEnum
CREATE TYPE "Urgencia" AS ENUM ('PADRAO', 'IMPORTANTE', 'URGENTE', 'CRITICA');

-- CreateTable
CREATE TABLE "tarefa" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "concluida" BOOLEAN NOT NULL DEFAULT false,
    "urgencia" "Urgencia" NOT NULL DEFAULT 'PADRAO',
    "dataDeCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataParaConclusao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" UUID NOT NULL,

    CONSTRAINT "tarefa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "dataDeCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "tarefa" ADD CONSTRAINT "tarefa_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
