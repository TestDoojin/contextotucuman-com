/*
 * Copyright (c) 2018 by Marfeel Solutions (http://www.marfeel.com)
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Marfeel Solutions S.L and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Marfeel Solutions S.L and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Marfeel Solutions SL.
 */
/* eslint-disable no-var, no-magic-numbers */

document.whiteCollar = (function() {
	var orderNum = 0;

	return {
		numColumns: 10,
		getItems: [
			{
				selector: function() {
					var right = document.querySelectorAll('.notas-column:not(#col-left) .thumbnail');
					var rightCount = 0;
					var left = document.querySelectorAll('.notas-column#col-left .thumbnail');
					var leftCount = 0;
					var div = document.createElement('DIV');

					div.setAttribute('class', 'mrf-articles');

					for (var i = 1; i < 80; i++) {
						if (Math.ceil(i / 3) % 2 === 0) {
							div.appendChild(left[leftCount] || null);
							leftCount++;
						} else {
							div.appendChild(right[rightCount] || null);
							rightCount++;
						}
					}
					document.body.appendChild(div);

					return document.querySelectorAll('.mrf-articles .thumbnail');
				},
				extractors: {
					title: '.caption a',
					uri: '.caption a',
					media: function(node) {
						var img = node && node.querySelector('.index-img');

						return img && img.getAttribute('data-src-load');
					},
					pocket: function() {
						orderNum++;
						var balconName;

						if (orderNum > 20) {
							balconName = 'second';
						} else {
							balconName = 'first';
						}

						return {
							order: orderNum,
							balcon: {
								name: balconName,
								title: '',
								layout: 'cards'
							}
						};

					}
				}
			}, {
				selector: '#myCarousel .item',
				extractors: {
					title: 'h4',
					uri: 'a',
					media: 'img',
					pocket: {
						order: 21,
						balcon: {
							name: 'slider',
							title: '',
							layout: 'photo_slider'
						}
					}
				}
			}

		],
		modifiers: []
	};
})();
