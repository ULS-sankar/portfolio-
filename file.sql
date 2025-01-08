-- Create Database
CREATE DATABASE sikappim;

-- Show Databases
SHOW DATABASES;

-- Use Database
USE sikappim;

-- Create Table
CREATE TABLE students (
    regno INT(11),
    name CHAR(20),
    address CHAR(20)
);

-- Show Tables
SHOW TABLES;

-- Describe Table
DESC students;

-- Alter Table to Add Column
ALTER TABLE students ADD COLUMN mark CHAR(20);

-- Describe Table After Alteration
DESC students;

-- Insert Data into Table
INSERT INTO students VALUES
    ('1', 'ajith', 'trichy', '96'),
    ('2', 'arun', 'trichy', '95'),
    ('3', 'arjun', 'trichy', '94');

-- Select Data from Table
SELECT * FROM students;

-- Drop Table
DROP TABLE students;
