import random as rd

with open("noun.txt") as f:
    noun = f.readlines()

with open("adverb.txt") as f:
    adverb = f.readlines()

with open("verb.txt") as f:
    verb = f.readlines()

with open("adj.txt") as f:
    adj = f.readlines()

seed = "The %s %s and the %s %s %s %s my %s %s from the %s %s with a %s %s"

print(seed % (adj[rd.randint(0, 2047)].rstrip(),
              noun[rd.randint(0, 2047)].rstrip(),
              adj[rd.randint(0, 2047)].rstrip(),
              noun[rd.randint(0, 2047)].rstrip(),
              adverb[rd.randint(0, 2047)].rstrip(),
              verb[rd.randint(0, 2047)].rstrip(),
              adj[rd.randint(0, 2047)].rstrip(),
              noun[rd.randint(0, 2047)].rstrip(),
              adj[rd.randint(0, 2047)].rstrip(),
              noun[rd.randint(0, 2047)].rstrip(),
              adj[rd.randint(0, 2047)].rstrip(),
              noun[rd.randint(0, 2047)].rstrip()))
