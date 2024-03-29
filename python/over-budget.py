"""
Create a function called over_budget that has five parameters named budget, food_bill, electricity_bill, internet_bill, and rent.
The function should return True if budget is less than the sum of the other four parameters — you’ve gone over budget! Return False otherwise.
"""

# Write your over_budget function here:
def over_budget(budget, food_bill, electricity_bill, internet_bill, rent):
  spent = food_bill + electricity_bill + internet_bill + rent

  if(budget < spent):
    return True
  else:
    return False