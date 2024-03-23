from contextlib import contextmanager

@contextmanager
def generic(card_type, sender, recipient):
  chosen_card = open(card_type, 'r')
  new_card = open(f"{sender}_generic.txt", 'w')
  try:
    new_card.write(f"Dear {recipient}\n")
    new_card.write(chosen_card.read() + "\n")
    new_card.write(f"Sincerely, {sender}")
    yield new_card
  finally:
    chosen_card.close()
    new_card.close()

class Personalized:
  def __init__(self, sender, receiver):
    self.sender = sender
    self.receiver = receiver
    self.file = open(f"{sender}_personalized.txt", "w")

  def __enter__(self):
    self.file.write(f"Dear {self.receiver}\n")
    return self.file

  def __exit__(self, *exc):
    self.file.write(f"Sincerely, {self.sender}")
    self.file.close()

with generic("thankyou_card.txt", "Mwenda", "Amanda") as card:
  print("Card Generated!")

with open("Mwenda_generic.txt", "r") as card:
  print(card.read())

with Personalized("John", "Michael") as card:
  card.write("I am so proud of you! Being your friend for all these years has been nothing but a blessing. I don’t say it often but I just wanted to let you know that you inspire me and I love you! All the best. Always.\n")

with generic("happy_bday.txt", "Josiah", "Remy") as generic_card:
  with Personalized("Josiah", "Esther") as personalized_card:
    personalized_card.write("Happy Birthday!! I love you to the moon and back. Even though you’re a pain sometimes, you’re a pain I can't live without. I am incredibly proud of you and grateful to have you as a sister. Cheers to 25!! You’re getting old!\n")
