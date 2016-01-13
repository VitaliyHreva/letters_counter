function Table (collection, headers) {
	this.collection = collection;
	this.headers = headers;

	this.draw = function () {
		var table = $('<table class="table"></table>');
		var headerTr = $('<tr></tr>');

		$.each(this.headers, function (i, thName) {
			var th = $('<th>' + thName + '</th>');
			headerTr.append(th);
		});
		table.append(headerTr);

		var self = this;
		$.each(collection, function (i, item) {
			var row = $('<tr></tr>');
			$.each(self.headers, function (i, thName) {
				var td = $('<td>' + item[thName] + '</td>');
				row.append(td);
			});
			table.append(row);
		});
		
		return table;
	}
}

