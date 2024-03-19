class School():
  def __init__(self, name, level, number_of_students):
    self.name = name
    self.level = level
    self.number_of_students = number_of_students

  def get_name(self):
    return self.name

  def get_level(self):
    return self.level

  def get_number_of_students(self):
    return self.number_of_students

  def set_number_of_students(self, new_number_of_students):
    self.number_of_students = new_number_of_students

  def __repr__(self):
    return "A {level} school named {name} with {number_of_students} students".format(level=self.level, name=self.name, number_of_students=self.number_of_students)

class PrimarySchool(School):
  def __init__(self, name, number_of_students, pickup_policy):
    super().__init__(name, "primary", number_of_students)
    self.pickup_policy = pickup_policy

  def get_pickup_policy(self):
      return self.pickup_policy

  def __repr__(self):
      parent_repr = super().__repr__()
      return parent_repr + ". The pickup policy is {pickup_policy}".format(pickup_policy = self.pickup_policy)

class HighSchool(School):
  def __init__(self, name, number_of_students, sports_teams):
    super().__init__(name, "high", number_of_students)
    self.sports_teams = sports_teams

  def get_sports_teams(self):
    return self.sports_teams

  def __repr__(self):
    parent_repr = super().__repr__()
    return parent_repr + ". The sport teams are {}".format(self.sports_teams)

school = School("Codecademy", "high", 100)
print(school)
print(school.get_name())
print(school.get_level())
school.set_number_of_students(200)
print(school.get_number_of_students())
  
primary_school = PrimarySchool("Codecademy", 300, "Pickup Allowed")
print(primary_school.get_pickup_policy())
print(primary_school)

high_school = HighSchool("Codecademy High", 500, ["Tennis", "Basketball"])
print(high_school.get_sports_teams())
print(high_school)
