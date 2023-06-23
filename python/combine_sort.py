"""
Write a function named combine_sort that has two parameters named my_list1 and my_list2.
The function should combine these two lists into one new list and sort the result. Return the new sorted list.
"""

def combine_sort(my_list1, my_list2):
  my_list = my_list1 + my_list2
  my_list.sort()
  return my_list