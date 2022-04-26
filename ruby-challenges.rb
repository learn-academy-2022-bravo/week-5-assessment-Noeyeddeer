# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# ---Pseudo Coding---
# Create a method called find_letter and set parameters to array and string
# Inside the method print the array using the select method, which will iterate through the array and return values which meet a specific requirement
# Use value to evaluate each value in the array using the include? method and check whether the value includes the string parameter
# Call the method and pass in arguments
def find_letter(array, string)
    p array.select {|value| value.include? string}
end

find_letter(beverages_array, letter_o)
find_letter(beverages_array, letter_t)

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

# Create a method called num_sum and set parameter as array
# Inside the method use the sum method on the array parameter to return the sum total of the numbers in the array
# Call the method and pass in arguments
def num_sum(array)
    p array.sum
end

num_sum(nums_array1)
num_sum(nums_array2)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Create a class called Bike
# Initialize model, wheels, and current_speed, where model can have variable input but wheels is set to 2 and current_speed is set to 0
# Create a method called bike_info which uses string interpolation to print the string "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
# Create a method called pedal_faster which increases current_speed by the number passed in to parameter num
# Create a method called brake which decreases current_speed by the number passed in to parameter num
# The number cannot go below zero so set a variable called decrease_speed equal to current_speed minus num
# Create a conditional which specifies that if decrease_speed is less than zero, current_speed should equal zero
# Else current_speed equals decrease_speed
# Create a new bike called my_bike and set model to "Trek"
# Test methods
class Bike
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster(num)
        @current_speed += num
    end

    def brake(num)
        decrease_speed = @current_speed - num
        if decrease_speed < 0
            @current_speed = 0
        else
            @current_speed = decrease_speed
        end
    end
end

my_bike = Bike.new("Trek")

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

my_bike.pedal_faster(10)
p my_bike.bike_info
my_bike.pedal_faster(18)
p my_bike.bike_info
my_bike.brake(5)
p my_bike.bike_info
my_bike.brake(25)
p my_bike.bike_info

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
