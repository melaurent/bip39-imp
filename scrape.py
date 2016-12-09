import MySQLdb

db = MySQLdb.connect("localhost", "root", "pop", "wn_pro_mysql")
cursor = db.cursor()

with open("word.txt") as f:
    content = f.readlines()

noun = []
verb = []
adj = []
adverb = []

i = 0
query = "SELECT ss_type FROM wn_synset WHERE word = \"%s\" ORDER BY tag_count DESC"
while i < len(content):
    if len(content[i].rstrip()) < 5:
        i += 1
        continue
    cursor.execute(query % content[i].rstrip())
    data = cursor.fetchone()
    if data:
        if data[0] == "n":
            noun.append(content[i].rstrip())
        elif data[0] == "v":
            verb.append(content[i].rstrip())
        elif data[0] == "a":
            adj.append(content[i].rstrip())
        elif data[0] == "r":
            adverb.append(content[i].rstrip())
    i += 1

f = open("noun.txt", "w")
for item in noun:
    f.write("%s\n" % item)

f = open("verb.txt", "w")
for item in verb:
    f.write("%s\n" % item)

f = open("adj.txt", "w")
for item in adj:
    f.write("%s\n" % item)

f = open("adverb.txt", "w")
for item in adverb:
    f.write("%s\n" % item)
