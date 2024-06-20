﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using Online_Learning_Management_Sysytem_MVC;

#nullable disable

namespace Online_Learning_Management_Sysytem_MVC.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20240618162240_AssesmentPhotoToOptional")]
    partial class AssesmentPhotoToOptional
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Online_Learning_Management_Sysytem_MVC.Assessment", b =>
                {
                    b.Property<long>("AssessmentID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("AssessmentID"));

                    b.Property<string>("Answer")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<long?>("CourseID")
                        .HasColumnType("bigint");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("DueDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<long>("EnrollmentID")
                        .HasColumnType("bigint");

                    b.Property<string>("Grade")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Photo")
                        .HasColumnType("text");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("AssessmentID");

                    b.HasIndex("CourseID");

                    b.HasIndex("EnrollmentID");

                    b.ToTable("Assessment", (string)null);
                });

            modelBuilder.Entity("Online_Learning_Management_Sysytem_MVC.Course", b =>
                {
                    b.Property<long>("CourseID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("CourseID"));

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<long>("InstructorID")
                        .HasColumnType("bigint");

                    b.Property<string>("Photo")
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("CourseID");

                    b.HasIndex("InstructorID");

                    b.ToTable("Course", (string)null);
                });

            modelBuilder.Entity("Online_Learning_Management_Sysytem_MVC.Enrollment", b =>
                {
                    b.Property<long>("EnrollmentID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("EnrollmentID"));

                    b.Property<long>("CourseID")
                        .HasColumnType("bigint");

                    b.Property<DateTime>("EnrollmentDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<long>("StudentID")
                        .HasColumnType("bigint");

                    b.HasKey("EnrollmentID");

                    b.HasIndex("CourseID");

                    b.HasIndex("StudentID");

                    b.ToTable("Enrollment", (string)null);
                });

            modelBuilder.Entity("Online_Learning_Management_Sysytem_MVC.User", b =>
                {
                    b.Property<long>("UserID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("UserID"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Photo")
                        .HasColumnType("text");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("UserID");

                    b.HasIndex("Username")
                        .IsUnique();

                    b.ToTable("User", (string)null);
                });

            modelBuilder.Entity("Online_Learning_Management_Sysytem_MVC.Assessment", b =>
                {
                    b.HasOne("Online_Learning_Management_Sysytem_MVC.Course", null)
                        .WithMany("Assessments")
                        .HasForeignKey("CourseID");

                    b.HasOne("Online_Learning_Management_Sysytem_MVC.Enrollment", "Enrollment")
                        .WithMany()
                        .HasForeignKey("EnrollmentID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Enrollment");
                });

            modelBuilder.Entity("Online_Learning_Management_Sysytem_MVC.Course", b =>
                {
                    b.HasOne("Online_Learning_Management_Sysytem_MVC.User", "Instructor")
                        .WithMany()
                        .HasForeignKey("InstructorID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.OwnsMany("Online_Learning_Management_Sysytem_MVC.Course_Article", "CourseArticles", b1 =>
                        {
                            b1.Property<long>("CourseID")
                                .HasColumnType("bigint");

                            b1.Property<int>("Id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("integer");

                            NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b1.Property<int>("Id"));

                            b1.Property<string>("Content")
                                .IsRequired()
                                .HasColumnType("text");

                            b1.Property<string>("Title")
                                .IsRequired()
                                .HasColumnType("text");

                            b1.Property<string>("Video")
                                .IsRequired()
                                .HasColumnType("text");

                            b1.HasKey("CourseID", "Id");

                            b1.ToTable("Course_Article");

                            b1.WithOwner()
                                .HasForeignKey("CourseID");
                        });

                    b.Navigation("CourseArticles");

                    b.Navigation("Instructor");
                });

            modelBuilder.Entity("Online_Learning_Management_Sysytem_MVC.Enrollment", b =>
                {
                    b.HasOne("Online_Learning_Management_Sysytem_MVC.Course", "Course")
                        .WithMany("Enrollments")
                        .HasForeignKey("CourseID")
                        .OnDelete(DeleteBehavior.SetNull)
                        .IsRequired();

                    b.HasOne("Online_Learning_Management_Sysytem_MVC.User", "Student")
                        .WithMany()
                        .HasForeignKey("StudentID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Course");

                    b.Navigation("Student");
                });

            modelBuilder.Entity("Online_Learning_Management_Sysytem_MVC.Course", b =>
                {
                    b.Navigation("Assessments");

                    b.Navigation("Enrollments");
                });
#pragma warning restore 612, 618
        }
    }
}
