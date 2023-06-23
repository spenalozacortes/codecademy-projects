"""
Create a function named remove_middle which has three parameters named my_list, start, and end.
The function should return a list where all elements in my_list with an index between start and end (inclusive) have been removed.
"""

def remove_middle(my_list, start, end):
  return my_list[:start] + my_list[end+1:]