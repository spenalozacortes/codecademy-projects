"""
Write a function named same_values() that takes two lists of numbers of equal size as parameters.
The function should return a list of the indices where the values were equal in lst1 and lst2.
"""

def same_values(lst1, lst2):
  indices = []
  for i in range(len(lst1)):
    if lst1[i] == lst2[i]:
      indices.append(i)
  return indices