from random import random
from statistics import mean
a = []
def d6():
    return int(random()*6+1)
def d6_4_diff():
    return int( random()*(20-4-1) + 3 )


gen = []
for i in range(10**2):
    stats = []
    for i in range(6):
        a = [ d6() for i in range(4) ]
        stats.append(sum(a)-min(a))
    print(min(stats), end = "|")
    gen.append(mean(stats))

print(mean(gen))

gen = []
for i in range(10**2):
    stats = []
    for i in range(6):
        stats.append(d6_4_diff())
    gen.append(mean(stats))
    print(min(stats), end = "|")

    
print(mean(gen))