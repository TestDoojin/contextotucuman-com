/*
 * Copyright (c) 2020 by Marfeel Solutions (http://www.marfeel.com)
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

import m, { BrowserHistory } from '@marfeel/core';

const ID_POSITION_IN_URL = 4;

const getCurrentPageId = () =>{
	const currentUrl = BrowserHistory.getCurrentLocation();
	const arrayUrl = currentUrl.split('/');

	return arrayUrl[ID_POSITION_IN_URL];
};

const getUrl = (id) => `https://www.contextotucuman.com/updatevisitaajax.php?notaid=${id}`;

export default class ContextoMetrics {

	trackVirtualPage(pageName, sectionId, navigationLevel, uri, title, htmlNode, column) {
		if (navigationLevel === 'details') {
			const currentPageId = getCurrentPageId();
			const requestUrl = getUrl(currentPageId);

			m.ajax.post(requestUrl);
		}
	}

	static buildFromJSON() {
		return new ContextoMetrics();
	}

	toJson() {
		return {
			custom: [
				{
					type: 'js',
					file: 'ContextoMetrics',
					platforms: ['TOUCH']
				}
			]
		};
	}
}
