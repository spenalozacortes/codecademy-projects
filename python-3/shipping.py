weight = 41.5
cost_ground_premium = 125

# Ground Shipping
if weight <= 2:
  cost_ground = 20 + weight * 1.5
elif weight <= 6:
  cost_ground = 20 + weight * 3
elif weight <= 10:
  cost_ground = 20 + weight * 4
else:
  cost_ground = 20 + weight * 4.75

# Drone Shipping
if weight <= 2:
  cost_drone = weight * 4.5
elif weight <= 6:
  cost_drone = weight * 9
elif weight <= 10:
  cost_drone = weight * 12
else:
  cost_drone = weight * 14.25

print("Ground Shipping $", cost_ground)
print("Ground Shipping Premium $", cost_ground_premium)
print("Drone Shipping $", cost_drone)