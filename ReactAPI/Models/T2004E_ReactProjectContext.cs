using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ReactAPI.Models
{
    public partial class T2004E_ReactProjectContext : DbContext
    {
        public T2004E_ReactProjectContext()
        {
        }

        public T2004E_ReactProjectContext(DbContextOptions<T2004E_ReactProjectContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Campain> Campains { get; set; }
        public virtual DbSet<CampainComment> CampainComments { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<ConnectedBrand> ConnectedBrands { get; set; }
        public virtual DbSet<Event> Events { get; set; }
        public virtual DbSet<EventComment> EventComments { get; set; }
        public virtual DbSet<Recipe> Recipes { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-IS0140H\\SQLEXPRESS;Initial Catalog=T2004E_ReactProject;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Campain>(entity =>
            {
                entity.Property(e => e.Content).IsRequired();

                entity.Property(e => e.Description).IsRequired();

                entity.Property(e => e.EndDate).HasColumnType("datetime");

                entity.Property(e => e.Image).IsRequired();

                entity.Property(e => e.Sponsor).IsRequired();

                entity.Property(e => e.StartDate).HasColumnType("datetime");

                entity.Property(e => e.Title).IsRequired();
            });

            modelBuilder.Entity<CampainComment>(entity =>
            {
                entity.HasIndex(e => e.CampainId, "fkIdx_75");

                entity.HasIndex(e => e.UserId, "fkIdx_78");

                entity.Property(e => e.CampainId).HasColumnName("CampainID");

                entity.Property(e => e.Comment).IsRequired();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.Rating).IsRequired();

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Campain)
                    .WithMany(p => p.CampainComments)
                    .HasForeignKey(d => d.CampainId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_74");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CampainComments)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_77");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.Image).IsRequired();

                entity.Property(e => e.Name).IsRequired();
            });

            modelBuilder.Entity<ConnectedBrand>(entity =>
            {
                entity.Property(e => e.Image).IsRequired();

                entity.Property(e => e.Name).IsRequired();
            });

            modelBuilder.Entity<Event>(entity =>
            {
                entity.Property(e => e.Content).IsRequired();

                entity.Property(e => e.Description).IsRequired();

                entity.Property(e => e.EndDate).HasColumnType("datetime");

                entity.Property(e => e.Image).IsRequired();

                entity.Property(e => e.Location).IsRequired();

                entity.Property(e => e.Organizer).IsRequired();

                entity.Property(e => e.StartDate).HasColumnType("datetime");

                entity.Property(e => e.Title).IsRequired();
            });

            modelBuilder.Entity<EventComment>(entity =>
            {
                entity.HasIndex(e => e.EventId, "fkIdx_63");

                entity.HasIndex(e => e.UserId, "fkIdx_66");

                entity.Property(e => e.Comment).IsRequired();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.EventId).HasColumnName("EventID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Event)
                    .WithMany(p => p.EventComments)
                    .HasForeignKey(d => d.EventId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_62");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.EventComments)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_65");
            });

            modelBuilder.Entity<Recipe>(entity =>
            {
                entity.HasIndex(e => e.CategoryId, "fkIdx_48");

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.Description).IsRequired();

                entity.Property(e => e.Image).IsRequired();

                entity.Property(e => e.Ingredients).IsRequired();

                entity.Property(e => e.Title).IsRequired();

                entity.Property(e => e.Tools).IsRequired();

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Recipes)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_47");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.ConfirmPassword).IsRequired();

                entity.Property(e => e.Email).IsRequired();

                entity.Property(e => e.FullName).IsRequired();

                entity.Property(e => e.Password).IsRequired();

                entity.Property(e => e.Role).IsRequired();
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
