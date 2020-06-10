s = "passage="
origindir = "C:/DirNameHere/"

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

fileNames.each {|key, value|

	f = File.new("#{origindir}#{key}.txt", "w+")
	
	aFile = File.new("#{key}.html")
	
	#start of the html file markup
	f.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n")
	f.write("<html xmlns=\"http://www.w3.org/1999/xhtml\">\n")
	f.write("<head>\n")
	f.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=iso-8859-1\" />\n")
	f.write("<title>Reading Guide</title>\n\n")
	f.write("<link href=\"styles.css\" rel=\"stylesheet\" type=\"text/css\">\n")
	f.write("</head>\n\n")
	f.write("<body>\n\n")
	f.write("<table>\n")
	f.write("<tr>\n")
	f.write("<td class=\"titleRowCell\">&nbsp;#{value}&nbsp;</td>\n")
	f.write("<td class=\"titleRowVerse\">&nbsp;Passage&nbsp;</td>\n")
    f.write("</tr>\n")
    
	lineNum = 1
	
	aFile.each_line {|line|
		if line.scan(/#{s}/).length > 0
			htmlLine = ""
			
			if lineNum.modulo(2) == 0
				htmlLine.concat("<tr class=\"alternateRow\">")
			else
				htmlLine.concat("<tr>")
			end
			
			htmlLine.concat("<td class=\"dayCell\">Day #{lineNum}</td>")
			htmlLine.concat("<td class=\"verseCell\">")
			
			if line.scan(";").length > 0
				#split the line, get the 2 seperate verses, then form the html
				selectionArray = line.split(";")
				selectionArray.each {|seperateSelection|
					
					p = seperateSelection.index(s)
					p = p + "passage=".length
					i = seperateSelection.index("')")
					e = i - p
					selection = seperateSelection.slice(p, e)
					
					htmlLine.concat("<a href=\"http://urlhere/selection=#{selection}\" target=\"_blank\">")
					htmlLine.concat("#{selection.gsub("+", " ")}</a>")
					
					htmlLine.concat(" ; ") if seperateSelection != selectionArray.last
				}
				
				htmlLine.concat("</td>")
			else
				p = line.index(s)
				p = p + "passage=".length
				i = line.index("')")
				e = i - p
				verse = line.slice(p, e)
				
				htmlLine.concat("<a href=\"http://bible.gospelcom.net/bible?version=ESV&passage=#{verse}\" target=\"_blank\">")
				htmlLine.concat("#{verse.gsub("+", " ")}</a></td>")			
			
	
			end
			
			htmlLine.concat("</tr>\n")			
			
			f.write(htmlLine)
				
			lineNum = lineNum + 1

		 end
	}
	
	#end of the html file markup
	 f.write("<tr>\n")
	 f.write("<td class=\"titleRowCell\">&nbsp;</td>\n")
	 f.write("<td class=\"titleRowVerse\">&nbsp;</td>\n")
	 f.write("</tr>\n")
	 f.write("</table>\n")
	 f.write("</body>\n")
	 f.write("</html>\n")
}