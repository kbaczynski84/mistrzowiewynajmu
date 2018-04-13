using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace MistrzowieWynajmu1.Migrations
{
    public partial class SeedingDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Owners(Name,Surname,Phone) VALUES ('Tomasz','Kempa','12346789')");
            migrationBuilder.Sql("INSERT INTO Owners(Name,Surname,Phone) VALUES ('Jas','Fasola','999999999')");
            migrationBuilder.Sql("INSERT INTO Owners(Name,Surname,Phone) VALUES ('Jacek','Nowak','987654321')");
            migrationBuilder.Sql("INSERT INTO Addresses(City,Street) VALUES ('Gdańsk','Wileńska')");
            migrationBuilder.Sql("INSERT INTO Addresses(City,Street) VALUES ('Gdańsk','Amundsena')");
            migrationBuilder.Sql("INSERT INTO Addresses(City,Street) VALUES ('Warszawa','Jagiellońska')");
            migrationBuilder.Sql("INSERT INTO Properties(Type,Description,Rooms,Area,Washer,Refrigerator,Iron,AddressId,OwnerId) VALUES (0,'Opis1',7,170,1,1,1,1,1)");
            migrationBuilder.Sql("INSERT INTO Properties(Type,Description,Rooms,Area,Washer,Refrigerator,Iron,AddressId,OwnerId) VALUES (1,'Opis2',6,150,1,0,1,2,2)");
            migrationBuilder.Sql("INSERT INTO Properties(Type,Description,Rooms,Area,Washer,Refrigerator,Iron,AddressId,OwnerId) VALUES (0,'Opis3',3,70,1,1,0,3,3)");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Owners");
            migrationBuilder.Sql("DELETE FROM Addresses");
            migrationBuilder.Sql("DELETE FROM Properties");
        }
    }
}
