#include<bits/stdc++.h>
using namespace std;

int b[100010];
int d[100010];

int main(){
    int n,m,k;

	cin>>n>>m>>k;

	for(int i=1;i<=n;i++){
		cin>>b[i];
	}

	for(int i=2;i<=n;i++){
		d[i]=b[i]-b[i-1];
	}

	sort(d+2,d+n+1);

	int sum=0;

	for(int i=2;i<n-k+2;i++){
		sum+=d[i];
	}

	cout<<sum+k<<endl;
}