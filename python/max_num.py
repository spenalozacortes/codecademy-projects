"""
Create a function named max_num() that takes a list of numbers named nums as a parameter.
The function should return the largest number in nums
"""

def max_num(nums):
  maximum = nums[0]
  for num in nums:
    if num > maximum:
      maximum = num
  return maximum