/*******w************
 * 
 * Utility Functions: Mostly string functions to use in other applications.
 *
 * Script: utilityFunctions.js
 * Authors: Alan Simpson
 *          Damien Altenburg
 * Version: 1.0
 * Date Created: 11.4.2012
 * Last Updated: 11.4.2012
 *
 ********************/

/*
 * Removes white space from a string value.
 *
 * return  A string with leading and trailing white-space removed.
 */
function trim(str) 
{
	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
}