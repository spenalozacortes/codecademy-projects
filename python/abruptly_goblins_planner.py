gamers = []
form_email = "Hello {}, we will play {} this {}."

def add_gamer(gamer, gamers_list):
    if("name" in gamer and "availability" in gamer):
        gamers_list.append(gamer)

def build_daily_frequency_table():
    return {"Monday": 0, "Tuesday": 0, "Wednesday": 0, "Thursday": 0, "Friday": 0, "Saturday": 0, "Sunday": 0}

def calculate_availability(gamers_list, available_frequency):
    for gamer in gamers_list:
        available_frequency["Monday"] += gamer["availability"].count("Monday")
        available_frequency["Tuesday"] += gamer["availability"].count("Tuesday")
        available_frequency["Wednesday"] += gamer["availability"].count("Wednesday")
        available_frequency["Thursday"] += gamer["availability"].count("Thursday")
        available_frequency["Friday"] += gamer["availability"].count("Friday")
        available_frequency["Saturday"] += gamer["availability"].count("Saturday")
        available_frequency["Sunday"] += gamer["availability"].count("Sunday")

def find_best_night(availability_table):
    max_count = 0
    max_day = ""
    for day, count in availability_table.items():
        if count > max_count:
            max_count = count
            max_day = day
    return max_day

def available_on_night(gamers_list, day):
    available_gamers = []
    for gamer in gamers_list:
        if day in gamer["availability"]:
            available_gamers.append(gamer["name"])
    return available_gamers

def send_email(gamers_who_can_attend, day, game):
    for gamer in gamers_who_can_attend:
        print(form_email.format(gamer, game, day))

kimberly = {"name": "Kimberly Warner", "availability": ["Monday", "Tuesday", "Friday"]}
add_gamer(kimberly, gamers)

add_gamer({'name':'Thomas Nelson','availability': ["Tuesday", "Thursday", "Saturday"]}, gamers)
add_gamer({'name':'Joyce Sellers','availability': ["Monday", "Wednesday", "Friday", "Saturday"]}, gamers)
add_gamer({'name':'Michelle Reyes','availability': ["Wednesday", "Thursday", "Sunday"]}, gamers)
add_gamer({'name':'Stephen Adams','availability': ["Thursday", "Saturday"]}, gamers)
add_gamer({'name': 'Joanne Lynn', 'availability': ["Monday", "Thursday"]}, gamers)
add_gamer({'name':'Latasha Bryan','availability': ["Monday", "Sunday"]}, gamers)
add_gamer({'name':'Crystal Brewer','availability': ["Thursday", "Friday", "Saturday"]}, gamers)
add_gamer({'name':'James Barnes Jr.','availability': ["Tuesday", "Wednesday", "Thursday", "Sunday"]}, gamers)
add_gamer({'name':'Michel Trujillo','availability': ["Monday", "Tuesday", "Wednesday"]}, gamers)


count_availability = build_daily_frequency_table()

calculate_availability(gamers, count_availability)

game_night = find_best_night(count_availability)

attending_game_night = available_on_night(gamers, game_night)

send_email(attending_game_night, game_night, "Abruptly Goblins!")


unable_to_attend_best_night = []
for gamer in gamers:
    if gamer["name"] not in attending_game_night:
        unable_to_attend_best_night.append(gamer)

second_night_availability = build_daily_frequency_table()

calculate_availability(unable_to_attend_best_night, second_night_availability)

second_night = find_best_night(second_night_availability)

available_second_game_night = available_on_night(gamers, second_night)

send_email(available_second_game_night, second_night, "Abruptly Goblins!")