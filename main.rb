require "sinatra"

get "/" do 
	erb :index
end 

post "/store_painting" do
	# create a function for saving the painting
	# have an alert saying it was saved
	# store that saved info in a csv file
end

# create post request to alert that it was saved