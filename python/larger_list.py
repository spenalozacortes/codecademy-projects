"""
Write a function named larger_list that has two parameters named my_list1 and my_list2.
The function should return the last element of the list that contains more elements. If both lists are the same size, then return the last element of my_list1.
"""

def larger_list(my_list1, my_list2):
  if len(my_list1) >= len(my_list2):
    return my_list1[-1]
  else:
    return my_list2[-1]