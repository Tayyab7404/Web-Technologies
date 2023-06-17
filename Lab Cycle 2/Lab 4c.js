// Matrix Addition and Multiplication:

const mat1 = [[1,2,3],
	      [4,5,6],
	      [7,8,9]];

const mat2 = [[10,11,12],
	      [13,14,15],
	      [16,17,18]]

function showMatrices()
{
	let output1 = print(mat1);
	let output2 = print(mat2);
	
	document.getElementById("Matrix1").innerHTML = output1;
	document.getElementById("Matrix2").innerHTML = output2;
}

function print(mat)
{
	let output = "";

	for (let i=0; i<mat.length; i++)
	{
		output += "<tr>";

		for (let j=0; j<mat[i].length; j++)
			output += "<td>"+mat[i][j]+"</td>";

		output += "</tr>";
	}

	return output;
}

function add()
{
	let mat3 = [];

	for(let i=0; i<mat1.length; i++)
	{
		let temp = []

		for(let  j =0; j < mat1[i].length; j++)
			temp.push(mat1[i][j]+mat2[i][j]);

		mat3.push(temp);
	}
	
	let output = print(mat3);
	document.getElementById("AdditionOutput").innerHTML = output;
}

function multiply()
{
	let mat3 = [];

	for (let i=0; i<mat1.length; i++)
	{
		let temp = [];

		for (let j=0; j<mat1[i].length; j++)
		{
			let res = 0;

			for (let k = 0; k < mat2.length; ++k)
				res += mat1[i][j] * mat2[j][i]

			temp.push(res)
		}

		mat3.push(temp)
	}

	let output = print(mat3);
	document.getElementById("MultiplicationOutput").innerHTML = output;
}