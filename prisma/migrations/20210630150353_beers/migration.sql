-- CreateTable
CREATE TABLE "Beer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "abv" DOUBLE PRECISION NOT NULL,
    "breweryId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brewery" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Beer" ADD FOREIGN KEY ("breweryId") REFERENCES "Brewery"("id") ON DELETE CASCADE ON UPDATE CASCADE;
