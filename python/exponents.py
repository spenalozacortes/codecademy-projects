"""
Create a function named exponents() that takes two lists as parameters named bases and powers. Return a new list containing every number in bases raised to every number in powers.
"""

def exponents(bases, powers):
  raised = []
  for base in bases:
    for power in powers:
      raised.append(base ** power)
  return raised