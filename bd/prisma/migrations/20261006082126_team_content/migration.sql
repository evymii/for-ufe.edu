-- CreateTable
CREATE TABLE "NewsPost" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "coverImage" TEXT,
    "category" TEXT NOT NULL DEFAULT 'Мэдээ',
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewsPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "number" INTEGER,
    "role" TEXT NOT NULL DEFAULT 'PLAYER',
    "position" TEXT,
    "heightCm" INTEGER,
    "weightKg" INTEGER,
    "birthYear" INTEGER,
    "hometown" TEXT,
    "photo" TEXT,
    "actionPhoto" TEXT,
    "bio" TEXT,
    "academicYear" TEXT,
    "isCaptain" BOOLEAN NOT NULL DEFAULT false,
    "ppg" DOUBLE PRECISION,
    "rpg" DOUBLE PRECISION,
    "apg" DOUBLE PRECISION,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" UUID NOT NULL,
    "competition" TEXT NOT NULL DEFAULT 'Их сургуулиудын аварга шалгаруулах тэмцээн',
    "round" TEXT,
    "opponent" TEXT NOT NULL,
    "opponentShort" TEXT,
    "opponentLogo" TEXT,
    "isHome" BOOLEAN NOT NULL DEFAULT true,
    "tipsAt" TIMESTAMP(3) NOT NULL,
    "venue" TEXT NOT NULL DEFAULT 'UFE Арена',
    "status" TEXT NOT NULL DEFAULT 'SCHEDULED',
    "teamScore" INTEGER,
    "opponentScore" INTEGER,
    "note" TEXT,
    "streamUrl" TEXT,
    "ticketUrl" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StandingRow" (
    "id" UUID NOT NULL,
    "teamName" TEXT NOT NULL,
    "teamShort" TEXT,
    "teamLogo" TEXT,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isCurrent" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StandingRow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT,
    "url" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isVisible" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaAlbum" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "coverImage" TEXT,
    "images" JSONB NOT NULL DEFAULT '[]',
    "eventDate" TIMESTAMP(3),
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MediaAlbum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SiteContent" (
    "id" UUID NOT NULL,
    "page" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SiteContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactMessage" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "subject" TEXT,
    "message" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsPost_slug_key" ON "NewsPost"("slug");

-- CreateIndex
CREATE INDEX "NewsPost_isPublished_publishedAt_idx" ON "NewsPost"("isPublished", "publishedAt");

-- CreateIndex
CREATE UNIQUE INDEX "Player_slug_key" ON "Player"("slug");

-- CreateIndex
CREATE INDEX "Player_isPublic_sortOrder_idx" ON "Player"("isPublic", "sortOrder");

-- CreateIndex
CREATE INDEX "Game_status_tipsAt_idx" ON "Game"("status", "tipsAt");

-- CreateIndex
CREATE INDEX "StandingRow_isCurrent_sortOrder_idx" ON "StandingRow"("isCurrent", "sortOrder");

-- CreateIndex
CREATE INDEX "Partner_isVisible_sortOrder_idx" ON "Partner"("isVisible", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "MediaAlbum_slug_key" ON "MediaAlbum"("slug");

-- CreateIndex
CREATE INDEX "MediaAlbum_isPublished_sortOrder_idx" ON "MediaAlbum"("isPublished", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "SiteContent_page_section_key" ON "SiteContent"("page", "section");

-- CreateIndex
CREATE INDEX "ContactMessage_isRead_createdAt_idx" ON "ContactMessage"("isRead", "createdAt");
