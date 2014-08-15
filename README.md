moment.fromTimeInput
=========

Parse simple variations of time strings like 12:00 and 12.00 and 200

				colons
					 ✓ recognises 12:00
					 ✓ recognises 18:10
					 ✓ recognises 6:10am
					 ✓ recognises 6:10pm
					 ✓ recognises 6:10 pm with a space
				 dots
					 ✓ recognises 12.00
					 ✓ recognises 18.5 as 18:05
					 ✓ recognises 6.10am
					 ✓ recognises 6.10pm
					 ✓ recognises 6.10 pm with a space
				 numbers
					 ✓ recognises 200 as 2:00
					 ✓ recognises 210 as 2:10
					 ✓ 280 is an invalid date
					 ✓ recognises 2330 as 11:30pm
					 ✓ recognises 2 as 2:00am
					 ✓ recognises 2am as 2:00am
					 ✓ recognises 2pm as 2:00pm
