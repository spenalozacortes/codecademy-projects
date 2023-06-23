"""
Create a function named reversed_list() that takes two lists of the same size as parameters named lst1 and lst2.
The function should return True if lst1 is the same as lst2 reversed. The function should return False otherwise.
"""

def reversed_list(lst1, lst2):
  for i in range(len(lst1)):
    if lst1[i] != lst2[len(lst2) - 1 - i]:
      return False
  return True 