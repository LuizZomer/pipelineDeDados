BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[users] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [users_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [users_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[games] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    [releaseDate] DATETIME2,
    [price] FLOAT(53) NOT NULL,
    [developerId] INT NOT NULL,
    CONSTRAINT [games_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[developers] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [country] NVARCHAR(1000),
    CONSTRAINT [developers_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[platforms] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [platforms_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[genders] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [genders_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[tags] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [tags_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[reviews] (
    [id] INT NOT NULL IDENTITY(1,1),
    [rating] INT NOT NULL,
    [comment] NVARCHAR(1000),
    [userId] INT NOT NULL,
    [gameId] INT NOT NULL,
    CONSTRAINT [reviews_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[purchases] (
    [id] INT NOT NULL IDENTITY(1,1),
    [purchaseDate] DATETIME2 NOT NULL CONSTRAINT [purchases_purchaseDate_df] DEFAULT CURRENT_TIMESTAMP,
    [paidPrice] FLOAT(53) NOT NULL,
    [userId] INT NOT NULL,
    [gameId] INT NOT NULL,
    CONSTRAINT [purchases_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[achievements] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    [points] INT NOT NULL,
    [gameId] INT NOT NULL,
    CONSTRAINT [achievements_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[achievement_unlocked] (
    [id] INT NOT NULL IDENTITY(1,1),
    [unlockDate] DATETIME2 NOT NULL CONSTRAINT [achievement_unlocked_unlockDate_df] DEFAULT CURRENT_TIMESTAMP,
    [userId] INT NOT NULL,
    [achievementId] INT NOT NULL,
    CONSTRAINT [achievement_unlocked_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [achievement_unlocked_userId_achievementId_key] UNIQUE NONCLUSTERED ([userId],[achievementId])
);

-- CreateTable
CREATE TABLE [dbo].[dlcs] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    [price] FLOAT(53) NOT NULL,
    [releaseDate] DATETIME2,
    [baseGameId] INT NOT NULL,
    CONSTRAINT [dlcs_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[game_genders] (
    [gameId] INT NOT NULL,
    [genderId] INT NOT NULL,
    CONSTRAINT [game_genders_pkey] PRIMARY KEY CLUSTERED ([gameId],[genderId])
);

-- CreateTable
CREATE TABLE [dbo].[game_tags] (
    [gameId] INT NOT NULL,
    [tagId] INT NOT NULL,
    CONSTRAINT [game_tags_pkey] PRIMARY KEY CLUSTERED ([gameId],[tagId])
);

-- CreateTable
CREATE TABLE [dbo].[game_platforms] (
    [gameId] INT NOT NULL,
    [platformId] INT NOT NULL,
    CONSTRAINT [game_platforms_pkey] PRIMARY KEY CLUSTERED ([gameId],[platformId])
);

-- AddForeignKey
ALTER TABLE [dbo].[games] ADD CONSTRAINT [games_developerId_fkey] FOREIGN KEY ([developerId]) REFERENCES [dbo].[developers]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[reviews] ADD CONSTRAINT [reviews_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[reviews] ADD CONSTRAINT [reviews_gameId_fkey] FOREIGN KEY ([gameId]) REFERENCES [dbo].[games]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[purchases] ADD CONSTRAINT [purchases_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[purchases] ADD CONSTRAINT [purchases_gameId_fkey] FOREIGN KEY ([gameId]) REFERENCES [dbo].[games]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[achievements] ADD CONSTRAINT [achievements_gameId_fkey] FOREIGN KEY ([gameId]) REFERENCES [dbo].[games]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[achievement_unlocked] ADD CONSTRAINT [achievement_unlocked_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[achievement_unlocked] ADD CONSTRAINT [achievement_unlocked_achievementId_fkey] FOREIGN KEY ([achievementId]) REFERENCES [dbo].[achievements]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[dlcs] ADD CONSTRAINT [dlcs_baseGameId_fkey] FOREIGN KEY ([baseGameId]) REFERENCES [dbo].[games]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[game_genders] ADD CONSTRAINT [game_genders_gameId_fkey] FOREIGN KEY ([gameId]) REFERENCES [dbo].[games]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[game_genders] ADD CONSTRAINT [game_genders_genderId_fkey] FOREIGN KEY ([genderId]) REFERENCES [dbo].[genders]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[game_tags] ADD CONSTRAINT [game_tags_gameId_fkey] FOREIGN KEY ([gameId]) REFERENCES [dbo].[games]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[game_tags] ADD CONSTRAINT [game_tags_tagId_fkey] FOREIGN KEY ([tagId]) REFERENCES [dbo].[tags]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[game_platforms] ADD CONSTRAINT [game_platforms_gameId_fkey] FOREIGN KEY ([gameId]) REFERENCES [dbo].[games]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[game_platforms] ADD CONSTRAINT [game_platforms_platformId_fkey] FOREIGN KEY ([platformId]) REFERENCES [dbo].[platforms]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
