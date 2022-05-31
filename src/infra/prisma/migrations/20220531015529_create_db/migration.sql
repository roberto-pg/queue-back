-- CreateTable
CREATE TABLE "queues" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,

    CONSTRAINT "queues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tickets" (
    "id" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "queue_id" TEXT NOT NULL,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_queue_id_fkey" FOREIGN KEY ("queue_id") REFERENCES "queues"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
