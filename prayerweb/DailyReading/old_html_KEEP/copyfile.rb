fileNames = {
				"1" => "January",
				"2" => "February",
				"3" => "March",
				"4" => "April",
				"5" => "May",
				"6" => "June",
				"7" => "July",
				"8" => "August",
				"9" => "September",
				"10" => "October",
				"11" => "November",
				"12" => "December"
			}

origindir = "C:/Documents and Settings/mark/My Documents/Visual Studio 2005/WebSites/markmcfadden.net/PrayerWeb/DailyReading/"

fileNames.each {|key, value|
	system("copy","#{origindir}#{key}.txt", "#{origindir}#{key}.html")
}