require "sinatra"
require "csv"
require "pry"
require "json"
require "net/http"
require "uri"



get "/" do 
	erb :index
end 


# GET /save_painting?savedArt=bwry,brrw,wwrb,wwwy
get "/save_painting" do

	colors = params['savedArt']
	File.open("saves.txt", "a") do |line|
		line.puts colors.chomp
	end
	erb :index
	
end

# create post request to alert that it was saved
# create a function for saving the painting
	# have an alert saying it was saved
	# store that saved info in a csv file