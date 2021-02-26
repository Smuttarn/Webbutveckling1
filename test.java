public class test {

    static int iterationsMerge = 0;
    static int iterationsBogus = 0;

    void merge(int arr[], int l, int m, int r)
    {
        // Find sizes of two subarrays to be merged
        int n1 = m - l + 1;
        int n2 = r - m;
 
        /* Create temp arrays */
        int L[] = new int[n1];
        int R[] = new int[n2];
 
        /*Copy data to temp arrays*/
        for (int i = 0; i < n1; ++i)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; ++j)
            R[j] = arr[m + 1 + j];
 
        /* Merge the temp arrays */
 
        // Initial indexes of first and second subarrays
        int i = 0, j = 0;
 
        // Initial index of merged subarry array
        int k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
 
        /* Copy remaining elements of L[] if any */
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
 
        /* Copy remaining elements of R[] if any */
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
 
    // Main function that sorts arr[l..r] using
    // merge()
    void sort(int arr[], int l, int r)
    {
        iterationsMerge++;
        if (l < r) {
            // Find the middle point
            int m =l+ (r-l)/2;
 
            // Sort first and second halves
            sort(arr, l, m);
            sort(arr, m + 1, r);
 
            // Merge the sorted halves
            merge(arr, l, m, r);
        }
    }
 
    /* A utility function to print array of size n */
    static void printArray(int arr[])
    {
        int n = arr.length;
        for (int i = 0; i < n; ++i)
            System.out.print(arr[i] + " ");
        System.out.println();
    }
 

    void bogoSort(int[] a) 
    { 
        // if array is not sorted then shuffle the 
        // array again 

        while (isSorted(a) == false) {
            shuffle(a);
            iterationsBogus++;
        }    
    } 
  
    // To generate permuatation of the array 
    void shuffle(int[] a) 
    { 
        // Math.random() returns a double positive 
        // value, greater than or equal to 0.0 and 
        // less than 1.0. 
        for (int i = 0; i < a.length; i++) 
            swap(a, i, (int)(Math.random() * i)); 
    } 
  
    // Swapping 2 elements 
    void swap(int[] a, int i, int j) 
    { 
        int temp = a[i]; 
        a[i] = a[j]; 
        a[j] = temp; 
    } 
  
    // To check if array is sorted or not 
    boolean isSorted(int[] a) 
    { 
        for (int i = 1; i < a.length; i++) 
            if (a[i] < a[i - 1]) 
                return false; 
        return true; 
    } 

    // Driver code
    public static void main(String args[])
    {
        int arr[] = { 124, 1, 13, 5, 61, 75, 9 };
        int arr2[] = { 12, 11, 132, 5, 25, 33, 5 };
 
        System.out.println("Given Array to sort with merge");
        printArray(arr);

        System.out.println("Given Array to sort with bogos");
        printArray(arr2);
 
        test ob = new test();
        
        ob.sort(arr, 0, arr.length - 1);

        ob.bogoSort(arr2);
 
        System.out.println("\nSorted array with Merge Sort");
        printArray(arr);
        System.out.println("Amount of times we sorted using Merge: " + iterationsMerge);

        System.out.println("\nSorted array with Bogos Sort");
        printArray(arr2);
        System.out.println("Amount of times we sorted using Bogus: " + iterationsBogus);
    }
}
