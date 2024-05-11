CREATE TABLE USER(
    user_id INTEGER PRIMARY KEY,
    user_name TEXT NOT NULL,
    password TEXT NOT NULL
);
CREATE TABLE CATEGORY(
    category_id INTEGER NOT NULL,
    category_name TEXT,
    FOREIGN KEY (category_name) REFERENCES EXPENSE(exp_category) ON DELETE CASCADE
);
CREATE TABLE EXPENSE(
    exp_id INTEGER PRIMARY KEY,
    user_id INTEGER,
    exp_name TEXT NOT NULL,
    exp_amt REAL NOT NULL,
    exp_created TEXT NOT NULL,
    exp_category TEXT,
    exp_note TEXT,
    FOREIGN KEY (user_id) REFERENCES USER(user_id) ON DELETE CASCADE
);
