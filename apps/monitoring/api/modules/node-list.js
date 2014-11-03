/*
 * Copyright (c) 2014, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

include('../db.jag');
var helper = require('as-data-util.js');
var sqlStatements = require('sql-statements.json');

function getNodeList() {
    var dataArray = [];
    var i, len;
    var sql = helper.formatSql(sqlStatements.nodeList, []);
    var results = executeQuery(sql);

    dataArray.push('All');
    for (i = 0, len = results.length; i < len; i++) {
        dataArray.push(results[i]['node']);
    }

    // print(dataArray);

    print([
        'All',
        {
            'groupName': 'Group 1',
            'elements': ['10.100.5.118', '10.100.5.119', '10.100.5.120']
        },
        {
            'groupName': 'Group 2',
            'elements': ['10.100.5.121', '10.100.5.122', '10.100.5.123', '10.100.5.124',
                '10.100.5.125']
        },
        {
            'groupName': 'Group 3',
            'elements': ['10.100.5.126', '10.100.5.127']
        }
    ]);
}